import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Meus projetos
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/django-market-product-page.png"
                    title="PyMarket"
                    description="Um marketplace feito utilizando python e Django como ferramenta fullstack, tailwhind para estilização, docker e docker-compose para deploy e MySQL como banco de dados.
                    Nesta aplicação diversos usuários podem se cadastrar, editar, excluir e vender seus produtos. Cada usúario possui uma tela de dashboard onde pode ver seus produtos e vendas."
                    link='https://github.com/joaoespanha/py_market'
                />
                <ProjectCard
                    src="/drinkcode.png"
                    title="Drink Code"
                    description="Um aplicativo de delivery feito utilizando node.js com express para implementar o backend, React.js para o frontend, JWT para autenticação e MySQL como banco de dados.
                   Este projeto foi feito por uma equipe de 5 pessoas onde participei do desenvolvimento de ponta a ponta, porém o meu foco principal foi no backend."
                    link=''
                />
                <ProjectCard
                    src="/django-crm.PNG"
                    title="Django CRM"
                    description="Um sistema de CRM feito utilizando Django como ferramenta fullstack, tailwhind para estilização e MySQL como banco de dados.
                    Nesta aplicação diversos ckientes podem ser cadastrados, editados e excluidos. Cada usúario possui uma tabela completa para visualizar seus clientes e suas informações."
                    link=''
                />
            </div>
        </div>
    );
};

export default Projects;