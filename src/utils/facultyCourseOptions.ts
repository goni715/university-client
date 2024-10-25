
type TOption = {
    value: string;
    label: string;
}


const facultyCourseOptions = (arr: any[]) => {
    const result = arr?.map((item) => ({
        value: item?.course?._id,
        label: `${item?.course?.title}`,
    })).reduce((acc: TOption[], current: TOption) => {
        if (!acc.some(item => item.value === current.value)) {
            acc.push(current);
        }
        return acc;
    },[])

    return result;
}


export default facultyCourseOptions;