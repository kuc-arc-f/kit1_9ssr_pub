import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
//
const Chat = {
  /**
   * get:
   * @param key: any
   *
   * @return
   */      
  get : async function(id: number) : Promise<any>
  {
    try{
      let item: any = {};
      const url = LibConfig.API_URL + "/chats/show/" + String(id);
      const response = await fetch(url);
      const json = await response.json();
      item = json.data;
//console.log(item);
      return item;
    } catch (e) {
      console.error(e);
    }
  },  
  /**
   * getList:
   * @param key: any
   *
   * @return
   */ 
  getList: async function(chatId: number): Promise<any>
  {
    try {
        let items = [];
        const item = {
          chatId: chatId,
          userId : 0,
        }
        const url = LibConfig.API_URL + "/chat_posts/index";
        const body = JSON.stringify(item);
        const res = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},      
          body: body
        });
        const json = await res.json()  
        items = json.data
//    console.log(json)	      
      return items;
    } catch (e) {
      console.error(e);
    }
  },
}
export default Chat;
