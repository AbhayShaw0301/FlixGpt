export const USER_LOGO= "https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbg8b9gDW0a4RN42JzXExXzjVU1EnPFfRBh0CpUQMcu_nm6Qwk5NRIkIxLoG8I-2JRU_dt_KvqdkT3a7eTWwBv0DgbvaCZA.png?r=54ag"
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY
    }
  };
  export const IMG_CDN_URL='https://image.tmdb.org/t/p/w500/'
  export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
  export const SUPPORTED_LANGUAGES = [{identifier:'en',name:"English"},{identifier:'hindi',name:"Hindi"},{identifier:'spanish',name:"Spanish"},{identifier:'mandarin',name:"Mandarin"},{identifier:'latin',name:"Latin"},]
  export const OPENAI_API_KEY=process.env.REACT_APP_OPENAI_API_KEY