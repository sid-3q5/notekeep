import { useState, useEffect } from "react";
import axios from "axios";
import './Home.scss';
import NoteList from "./NoteList";
import Pagination from "./Pagination";
import { FcIdea } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const url = "http://127.0.0.1:8000/api/list/";

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [notesPerPage] = useState(6);
    
    useEffect(() => {
        const getData = async () => {
                axios({
                    method: 'GET',
                    url: url
                })
                    .then((response) => {
                        setData(response.data);
                        setLoading(false);
                    })
                    .catch((error) => console.log(error));
        }
        getData();
    },[]);

    
    // Get Current Notes
    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = data.slice(indexOfFirstNote, indexOfLastNote);
    
   // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    if(data.length === 0) {
        return (
            <div className="none">
                <FcIdea />
                <h1>Notes you add appear here</h1>
            </div>
        )
    }
    return ( 
        <div>
            { loading && 
                <div className="loading">
                    <h3 style={{textAlign: "center"}}> <span> <AiOutlineLoading3Quarters /> </span></h3>
                </div>
            }
            <NoteList data={currentNotes} loading={loading} />
            <Pagination 
            notesPerPage={notesPerPage}
            totalNotes={data.length}
            paginates={paginate}
            current = {currentPage}
             />
             <div className="page">
                <button>Page {currentPage}</button>
             </div>
        </div>
     );
}
 
export default Home;