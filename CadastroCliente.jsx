import React, { useState } from 'react'

export default function CadastroCliente() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Cliente ${nome} cadastrado com sucesso!`)
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md">
        <label className="block mb-2 font-semibold">Nome</label>
        <input
          type="text"
          className="input mb-4 w-full"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">E-mail</label>
        <input
          type="email"
          className="input mb-4 w-full"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Telefone</label>
        <input
          type="tel"
          className="input mb-6 w-full"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">Cadastrar Cliente</button>
      </form>
    </div>
  )
}
