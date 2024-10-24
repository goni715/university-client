import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicDepartmentMutation, useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement/academicDepartment/academicDepartmentApi";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../../../helper/ValidationHelper";
import { AcademicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { useGetAllSemesterRegistrationsQuery } from "../../../redux/features/admin/courseManagement/semesterRegistration/semesterRegistrationApi";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement/academicFaculty/academicFacultyApi";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement/course/courseApi";
import { useGetCourseFacultiesQuery } from "../../../redux/features/admin/courseManagement/courseFaculty/courseFacultyApi";
import PHMultiSelect from "../../../components/form/PHMultiSelect";
import { daysOptions } from "../../../constants/global";
import PHTimePicker from "../../../components/form/PHTimePicker";



const CreateOfferedCoursePage = () => {
    const [courseId, setCourseId] = useState('')
    const { data: semesterRegData, isLoading } = useGetAllSemesterRegistrationsQuery(undefined);
    const semesterRegOptions = semesterRegData?.data?.map((item) => ({
      value: item?._id,
      label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
    }));

    const { data: facultyData, isLoading:facultyLoading } = useGetAllAcademicFacultiesQuery(undefined);
    const academicFacultyOptions = facultyData?.data?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));

    const {
      data: departmentData, isLoading: deptLoading
    } = useGetAllDepartmentsQuery(undefined); 
    const academicDepartmentOptions = departmentData?.data?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));

    const { data: coursesData, isLoading:courseLoading } = useGetAllCoursesQuery([
      { name: "sort", value: "code" },
    ]);
    const courseOptions = coursesData?.data?.map((item) => ({
      value: item?._id,
      label: item?.title,
    }));


    const { data: facultiesData } = useGetCourseFacultiesQuery(courseId, {skip: !courseId});
    //console.log(facultiesData?.data?.faculties);
    const coursefaculties = facultiesData?.data?.faculties;
    const coursefacultiesOptions = coursefaculties?.map((item) => ({
      value: item?._id,
      label: item?.fullName,
    }));

    

  




  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();





  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // const toastId = LoadingToast("Creating...");
    // try {
    //   await addAcademicDepartment(data).unwrap();
    //   SuccessToast("Academic Department Create Success", toastId);
    //   return true;
    // } catch (err: any) {
    //   if (err?.status === 400) {
    //     ErrorToast("This Department existed", toastId);
    //   }
    //   if (err?.status === 500) {
    //     ErrorToast("Something Went Wrong", toastId);
    //   }
    // }
  };

  return (
    <>
      <Flex justify="center" align="center" style={{ minHeight: "80vh" }}>
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
          >
            <PHSelect
              name="semesterRegistration"
              label="Semester Registration"
              options={semesterRegOptions}
              disabled={isLoading}
            />
            <PHSelect
              name="academicFaculty"
              label="Academic Faculty"
              options={academicFacultyOptions}
              disabled={facultyLoading}
            />
            <PHSelect
              name="academicDepartment"
              label="Academic Department"
              options={academicDepartmentOptions}
              disabled={deptLoading}
            />
            <PHSelectWithWatch
              onValueChange={setCourseId}
              name="course"
              label="Course"
              options={courseOptions}
              disabled={courseLoading}
            />
            <PHSelect
              name="faculty"
              label="Faculty"
              options={coursefacultiesOptions}
              disabled={!coursefaculties}
            />
            <PHInput type="text" name="maxCapacity" label="Max Capacity" />
            <PHInput type="text" name="section" label="Section" />
            <PHMultiSelect name="days" label="Days" options={daysOptions}/>
            <PHTimePicker name="startTime" label="Start Time" />
            <PHTimePicker name="endTime" label="End Time" />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};



export default CreateOfferedCoursePage;