import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CadastroCliente from './pages/CadastroCliente'
import CadastroComodato from './pages/CadastroComodato'
import Relatorios from './pages/Relatorios'
import Perfil from './pages/Perfil'
import Configuracoes from './pages/Configuracoes'

export default function App() {
  const [isLogged, setIsLogged] = useState(false)

  if (!isLogged) return <Login onLogin={() => setIsLogged(true)} />

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">ComodiFy</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="btn-nav">Dashboard</Link></li>
            <li><Link to="/cadastro-cliente" className="btn-nav">Cadastro Cliente</Link></li>
            <li><Link to="/cadastro-comodato" className="btn-nav">Cadastro Comodato</Link></li>
            <li><Link to="/relatorios" className="btn-nav">Relatórios</Link></li>
            <li><Link to="/perfil" className="btn-nav">Perfil</Link></li>
            <li><Link to="/configuracoes" className="btn-nav">Configurações</Link></li>
            <li><button onClick={() => setIsLogged(false)} className="btn-nav">Sair</button></li>
          </ul>
        </nav>

        <main className="flex-grow p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cadastro-cliente" element={<CadastroCliente />} />
            <Route path="/cadastro-comodato" element={<CadastroComodato />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="bg-white text-center p-4 border-t">
          ComodiFy &copy; 2025
        </footer>
      </div>
    </Router>
  )
}
