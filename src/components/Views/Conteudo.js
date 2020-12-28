import React, { Component } from 'react';


class Conteudo extends Component {
    render(){
        return(
            <div className="container-fluid text-center p-0">
                <div id="consultoria" className="bg-light pt-4" widht="100">
                    <h1>Consultoria de Imagem e Estilo</h1>
                    <div className="col-1 mx-auto border-bottom border-consultoria" />

                    <div className="container pt-3 pb-3">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, making it 
                            over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                            College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                            from a Lorem Ipsum passage, and going through the cites of the word in classical 
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
                            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
                            sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
                            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
                            are also reproduced in their exact original form, accompanied by English versions from 
                            the 1914 translation by H. Rackham.
                        </p>
                    </div>
                </div>

                <div id="servicos" className="pt-4 container">
                    <h2>Serviços</h2>
               
                    <div className="pt-3 row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Coloração Pessoal</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Revitalização do Guarda-roupas</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Personal Shopper</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Etapa investigativa + Projeto de imagem</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Etapa Construtiva</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Consultoria de Imagem e Estilo</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div id="sobre" className="mt-4 pt-4 bg-light">
                    <h2>Sobre</h2>

                    <div className="mt-3 p-3">
                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h3 className="featurette-heading">
                                    Oh yeah, it’s that good. 
                                    <span className="text-muted">See for yourself.</span>
                                </h3>
                                <p className="lead">
                                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis 
                                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. 
                                    Fusce dapibus, tellus ac cursus commodo.
                                </p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-circle" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Conteudo;