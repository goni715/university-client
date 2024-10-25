
type TOption = {
    value: string;
    label: string;
}


const facultySemesterOptions = (arr: any[]) => {
    const semesterOptions = arr?.map((item) => ({
        value: item?.semesterRegistration?._id,
        label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
    })).reduce((acc: TOption[], current: TOption) => {
        if (!acc.some(item => item.value === current.value)) {
            acc.push(current);
        }
        return acc;
    },[])

    return semesterOptions;
}


export default facultySemesterOptions;