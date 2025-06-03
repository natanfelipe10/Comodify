import React, { useState } from 'react'

export default function CadastroComodato() {
  const [cliente, setCliente] = useState('')
  const [produto, setProduto] = useState('')
  const [dataInicio, setDataInicio] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Comodato para ${cliente} cadastrado com sucesso!`)
    setCliente('')
    setProduto('')
    setDataInicio('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cadastro de Comodato</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md">
        <label className="block mb-2 font-semibold">Cliente</label>
        <input
          type="text"
          className="input mb-4 w-full"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Produto</label>
        <input
          type="text"
          className="input mb-4 w-full"
          value={produto}
          onChange={e => setProduto(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Data de Início</label>
        <input
          type="date"
          className="input mb-6 w-full"
          value={dataInicio}
          onChange={e => setDataInicio(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">Cadastrar Comodato</button>
      </form>
    </div>
  )
}
