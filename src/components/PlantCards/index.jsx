function PlantCard({nome, descricao, imagem}) {
    return (
        <div className="border-2 border-green-900 rounded-2xl p-5 w-40 hover:scale-105 transition-transform">
            <img src={imagem} alt={nome} className="w-full h-20 object-cover rounded-md mb-5" />
            <h4 className="text-lg font-semibold text-green-600">{nome}</h4>
            <p className="text-sm text-gray-600">{descricao}</p>
        </div>
    )
}

export default PlantCard