function formatarMoeda(preco){
    //instanciar classe - mudar valor da moeda
    const valorFormatado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(preco);
    
    return valorFormatado;
}