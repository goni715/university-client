import { useParams } from "react-router-dom";


const StudentUpdatePage = () => {
    const {id} = useParams();

    return (
        <>
            <h1>This is Student Update Page {id}</h1>
        </>
    );
};

export default StudentUpdatePage;