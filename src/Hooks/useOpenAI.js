import openai from "../utils/openAI";

const useOpenAI=()=>{

    const getGptResults=async(query)=>{
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: query }],
            model: "gpt-3.5-turbo",
          });
          return gptResults.choices?.[0]?.message?.content.split(",");
    }
    
   
return { getGptResults };
};

export default useOpenAI;