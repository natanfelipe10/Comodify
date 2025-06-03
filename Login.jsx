import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (email === 'admin@comodify.com' && senha === '123456') {
      onLogin()
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login ComodiFy</h2>

        <label className="block mb-2 font-semibold">E-mail</label>
        <input
          type="email"
          className="input mb-4 w-full"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="admin@comodify.com"
        />

        <label className="block mb-2 font-semibold">Senha</label>
        <input
          type="password"
          className="input mb-6 w-full"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
          placeholder="123456"
        />

        <button type="submit" className="btn-primary w-full">Entrar</button>
      </form>
    </div>
  )
}
