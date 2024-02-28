import { useState, useEffect } from "react" // part of the logic for the demo component

//useEffect is a hook that allows us to perform side effects in function components
//usestate is a hook that allows us to use state in function components
//react h

import { copy, linkIcon, loader, tick} from '../assets'
import { useLazyGetSummaryQuery} from '../services/article'

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  }); // state for the articles
  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await getSummary({articleUrl: article.url
    });

    if (data?.summary){
      const newArticle = {
        ...article, summary: data.summary
      };

      setArticle(newArticle)
      console.log(newArticle)
    }
  }
  return (
    <section className="mt-16 w-full max-w-xl" >
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form 
          className="relative flex justify-center items-center "
          onSubmit={handleSubmit}                                                                                                                                                               Submit={() => {}}
          >

            <img
            src = {linkIcon}
            alt = "link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
             />

            <input
            type="url"
            placeholder="Paste a link to shorten it"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })} // spread operator
            required
            className="url_input peer"
            />
            <button
            type="submit"
            className="submit_btn"
            >
              ↵
            </button>

            {/* Browse history */}

            <div>
              {/*Output of the summary*/}
            </div>
        </form>
      </div>
    </section>
  )
}

export default Demo;