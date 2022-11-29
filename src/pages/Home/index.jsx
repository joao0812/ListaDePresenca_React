import React, { useState, useEffect } from 'react'; // Isso é um hock, q são funções q permitem vc ligar e conectar os recursos de estado e ciclo de vida do react a partir de componentes funcionais
import './style.css'

import { Card } from '../../components/card'

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState({ name: '', avatar: '' })

    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleDateString("pt-br", { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }
        setStudents(prevState => [...prevState, newStudent])
    }

    useEffect(() => {
        // useEffect é executado automaticamente assim q a interface for renderizado
        //console.log('useEffect foi chamado')
        fetch('https://api.github.com/users/joao0812')
            .then(response => response.json())
            .then(data => {
                setUser({
                    name: data.name,
                    avatar: data.avatar_url
                })
            })
    }, [])

    return (
        <div className='container'>
            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Foto de perfil" />
                </div>
            </header>

            <input
                type="text"
                placeholder="Digite seu Nome"
                onChange={e => setStudentName(e.target.value)}
            />
            <button type="button" onClick={handleAddStudent}>Adicionar</button>

            {/* <Card name='Joni' time='10:20:30' /> */}
            {
                students.map(student => (
                    <Card
                        key={student.name}
                        name={student.name}
                        time={student.time}
                    />))
            }

        </div>

    )
}


