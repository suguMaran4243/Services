export class LoggerService
{
    logMessage(name:string,status:string)
    {
        console.log(`A new user ${name} with status ${status} is added`);
    }
}