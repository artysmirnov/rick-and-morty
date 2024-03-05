import Character from "./Character";
import Pagination from './Pagination'
import {useEffect, useState} from "react";
import Filters from "./Filters";
import SearchName from "./SearchName";
import Modal from "./Modal";
import styled from "styled-components";


const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
`

function List() {
    const [status, setStatus] = useState('')
    const [fetchedData, setFetchedData] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
    const [searchName, setSearchName] = useState('')
    const [searchType, setSearchType] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [currentCharacter, setCurrentCharacter] = useState("")
    const [modalCharacter, setModalCharacter] = useState('')

    const {info, results} = fetchedData

    const charApi = `https://rickandmortyapi.com/api/character/${currentCharacter}`

    let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchName}&status=${status}&gender=${gender}&species=${species}&type=${searchType}`

    useEffect(() => {
        async function fetchChar() {
            const data = await fetch(charApi)
            const char = await data.json();
            setModalCharacter(char)
            setLoading(false);
        }

        fetchChar()
    }, [charApi]);


    useEffect(() => {
        async function fetchData() {
            const data = await fetch(api)
            const results = await data.json();
            setFetchedData(results);
            setLoading(false);
        }

        fetchData()
    }, [api]);

    return (
        <ListStyled>
            <h1>Rick & Morty</h1>
            <div><p>Search by name </p><SearchName setSearchName={setSearchName}/></div>
            <div><p>Search by type </p><SearchName setSearchType={setSearchType}/></div>
            <Filters
                setStatus={setStatus}
                setGender={setGender}
                setPage={setPage}
                setSpecies={setSpecies}
                setSearchName={setSearchName}
                setSearchType={setSearchType}
            />
            <Pagination info={info} setPage={setPage} pageNumber={page}/>
            {loading ? (<div>Loading...</div>) :
                (
                    results ?
                        results.map((character) => (
                            <Character
                                key={character.id}
                                results={results}
                                character={character}
                                setActive={setModalActive}
                                active={modalActive}
                                setCharacter={setCurrentCharacter}
                            />

                        )) : <p>No results</p>
                )}
            <Modal active={modalActive} setActive={setModalActive} currentCharacter={modalCharacter}/>
        </ListStyled>
    )
}

export default List