import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../model/Orphanages';
import orphanagesView from '../views/orphanages_view';

import * as Yup from 'yup';

export default{

    //QUERY -  Listar todas as tabelas do DB e seus dados
    async index(request: Request, response: Response){

        // Busca a tabela no DB
        const orphanagesRepository = getRepository(Orphanages);

        // Cria a query
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        // Retorna a query com todos os dados encontrados no DB
        return response.status(201).json(orphanagesView.renderAll(orphanages));
    },

    // QUERY - Busca um orfanato especifico no DB
    async show(request: Request, response: Response){

        // Guarda o id passado no parametro(Route Params :id)
        const { id } = request.params;

        // Criar o request e response
        const orphanagesRepository = getRepository(Orphanages);

        // Criar a query
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanagesView.render(orphanage));

    },

    // QUERY - Cadastra no banco
    async create(request: Request, response: Response){
        console.log(request.files);

         // Destrinchar os dados que irão ser passados e coloca-los em variáveis
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekend
    } = request.body;

    // Guarda essas variáveis em um repositorio
    const orphanagesRepository = getRepository(Orphanages);

    // 
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
        return { path: image.filename }
    })

    const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekend: open_on_weekend === 'true',
        images
    }

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo nome é obrigatório'),
        latitude: Yup.number().required('Preencha a latitude corretamente'),
        longitude: Yup.number().required('Preencha a longitude corretamente'),
        about: Yup.string().required('Campo obrigatório (Limite 400 caracteres)').max(400),
        instructions: Yup.string().required('Campo obrigatório'),
        opening_hours: Yup.string().required('Digite o horário de atendimento'),
        open_on_weekend: Yup.boolean().required('Informação obrigatória'),
        images: Yup.array(
            Yup.object().shape({
            path: Yup.string().required()
        }))
    });

    await schema.validate(data, {
        abortEarly: false,
    });
    
    // Joga essas informações nas tabelas do banco de dados
    const orphanage = orphanagesRepository.create(data);

    // Salva o processo feito no banco
    await orphanagesRepository.save(orphanage);


   return response.status(201).json(orphanage);
    }
}