import Character from "./Character";
import Pagination from './Pagination'
import {useEffect, useState} from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import styled from "styled-components";
import {TailSpin} from 'react-loader-spinner'


const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
`

function List() {
    const [status, setStatus] = useState('') // Статус персонажа
    const [fetchedData, setFetchedData] = useState([])
    const [loading, setLoading] = useState(true); // Загрузка
    const [page, setPage] = useState(1) // Страница
    const [gender, setGender] = useState('') // Гендер персонажа
    const [species, setSpecies] = useState('') // Вид персонажа
    const [searchName, setSearchName] = useState('') // Поиск по имени
    const [searchType, setSearchType] = useState('') // Поиск по типу 
    const [modalActive, setModalActive] = useState(false) // Статус модального окна
    const [currentCharacter, setCurrentCharacter] = useState("") // Текущий персонаж
    const [modalCharacter, setModalCharacter] = useState('') // Персонаж в модальном окне

    const {info, results} = fetchedData // деструктуризация полученных данных

    const charApi = `https://rickandmortyapi.com/api/character/${currentCharacter}`

    let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchName}&status=${status}&gender=${gender}&species=${species}&type=${searchType}`

    useEffect(() => { // получение персонажей
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
            <img src="rickAndMorty.png" alt="тут логотип" width='100'/>
            <div><p>Search by name </p><SearchBar setSearchName={setSearchName}/></div>
            <div><p>Search by type </p><SearchBar setSearchType={setSearchType}/></div>
            <Filters
                setStatus={setStatus}
                setGender={setGender}
                setPage={setPage}
                setSpecies={setSpecies}
                setSearchName={setSearchName}
                setSearchType={setSearchType}
            />
            <Pagination info={info} setPage={setPage} pageNumber={page}/>
            {loading ? (
                    <TailSpin visible={true}
                              height="80"
                              width="80"
                              color="blue"
                              ariaLabel="tail-spin-loading"
                              radius="1"
                              wrapperStyle={{}}
                              wrapperClass=""/>
                ) :
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

            <Modal active={modalActive} setActive={setModalActive} currentCharacter={modalCharacter}
                   setCharacter={setCurrentCharacter}/> :
        </ListStyled>
    )
}

export default List