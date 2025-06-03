import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const dadosComodatos = [
  { mes: 'Jan', ativos: 30, inativos: 5 },
  { mes: 'Fev', ativos: 45, inativos: 8 },
  { mes: 'Mar', ativos: 40, inativos: 7 },
  { mes: 'Abr', ativos: 55, inativos: 6 },
  { mes: 'Mai', ativos: 60, inativos: 10 },
  { mes: 'Jun', ativos: 70, inativos: 9 },
]

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Comodatos Ativos vs Inativos (últimos 6 meses)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dadosComodatos} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ativos" stroke="#4F46E5" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="inativos" stroke="#EF4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
