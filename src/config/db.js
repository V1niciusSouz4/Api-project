import mongoose from 'mongoose'; //Importa a lib do banco de dados

mongoose.Promise = Promise; //Passa as propriedades de Promisse(javascript) para mongoose.Promise


/**
 * .on escuta o que o mongoose retorna, caso seja o que está em '', roda a arrow function
 */
mongoose.connection.on('connected', () => console.log('MongoDB Connection Established'));

mongoose.connection.on('disconnected', () => console.log('MongoDB Disconnected'));

mongoose.connection.on('closed', () => console.log('MongoDB Connection closed'));

mongoose.connection.on('error', error => console.log('MongoDB ERROR: ', error));


export const connectMongoDB = async () => {
    const connectUri = process.env.MONGODB_URI

    await mongoose.connect(connectUri, {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
}