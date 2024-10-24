import { TOfferedCourseItem } from "../types/offeredCourse.type";

type TArrayItem = {
    title: string; 
    section: number;
    _id: string;
    days: string[];
    startTime: string;
    endTime: string;
}


type TResultItem = {
  title: string;
  sections: [
    {
      section: number;
      _id: string;
      days: string[];
      startTime: string;
      endTime: string;
    }
  ];
};


const convertOfferedCourse = ((arr: TOfferedCourseItem[]) => {

    const arrayOne: TArrayItem[] = arr?.map((item) => ({
      title: item?.course?.title,
      section: item?.section,
      _id: item?._id,
      days: item?.days,
      startTime: item?.startTime,
      endTime: item?.endTime,
    }));



    const resultArray = arrayOne?.reduce((acc: TResultItem[], item: TArrayItem) : TResultItem[] => {
        // Check if the title already exists in the accumulator
        const existing = acc.find(entry => entry.title === item?.title);
      
        if (existing) {
          // If the title exists, add the section and _id to its sections array
          existing.sections.push({
             section: item.section,
              _id: item?._id,
              days: item?.days,
              startTime: item?.startTime,
              endTime: item?.endTime,
            });

        } else {
          // If the title does not exist, create a new entry
          acc.push({
            title: item.title,
            sections: [
                { 
                    section: item.section,
                     _id: item._id ,
                     days: item?.days,
                     startTime: item?.startTime,
                     endTime: item?.endTime,
                }
            ]
          });
        }
      
        return acc;
      }, []);
      
      return resultArray;
 
})
   


export default convertOfferedCourse;
















/*
    const arrayOne = [
        { title: "Hyper Text Markup Language", section: 1, _id: "671a29f5fff55966e75be3dc" },
        { title : "Hyper Text Markup Language", section: 2, _id: "671a2a42fff55966e75be3f1" },
        { title: "React", section: 1, _id: "671a2ac7fff55966e75be426" }
      ];

  const resultArray = [
        { 
            title: "Hyper Text Markup Language",
            sections:[
                {section: 1, _id: "671a29f5fff55966e75be3dc"},
                {section: 2, _id: "671a2a42fff55966e75be3f1"}
            ]

         },
         { 
            title: "React",
            sections:[
                {section: 1, _id: "671a2ac7fff55966e75be426"}
            ]

         },
    ] 
*/
      
    //   const resultArray = arrayOne.reduce((acc, item) => {
    //     // Check if the title already exists in the accumulator
    //     let existing = acc.find(entry => entry.title === item.title);
      
    //     if (existing) {
    //       // If the title exists, add the section and _id to its sections array
    //       existing.sections.push({ section: item.section, _id: item._id });
    //     } else {
    //       // If the title does not exist, create a new entry
    //       acc.push({
    //         title: item.title,
    //         sections: [{ section: item.section, _id: item._id }]
    //       });
    //     }
      
    //     return acc;
    //   }, []);
      
    //   console.log(resultArray);
      