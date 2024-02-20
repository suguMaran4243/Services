import { LoggerService } from "./logger.service";
export class SubscribeService
{
    onSubscribe(type :string)
    {
        alert('Thankyou for Subscribeing..'+type+'You can use our sports centre');
        let logger=new LoggerService();
        logger.logMessage('Sugu','Curent');
    }
   
}