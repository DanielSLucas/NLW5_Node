import { Request, Response } from 'express';
import MessagesService from '../services/MessagesService';

class MessagesController {

  async create(request: Request, response: Response ): Promise<Response> {
    try {
      const { admin_id, text, user_id } = request.body;
  
      const messagesService = new MessagesService();

      const message = await messagesService.create({ 
        admin_id, 
        text, 
        user_id,
      });
    
      return response.json(message);
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async showByUser(request: Request, response: Response ): Promise<Response> {
    try {
      const { id } = request.params;

      const messagesService = new MessagesService();

      const list = await messagesService.listByUser(id);

      return response.json(list);
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export default MessagesController;