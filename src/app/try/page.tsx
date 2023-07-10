'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const TryPage = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [featureTab, setFeatureTab] = useState('');
  const [codeBlock, setCodeBlock] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!codeBlock || !featureTab || isLoading)
  }, [codeBlock, featureTab, isLoading]);



  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading || !codeBlock || !featureTab) {
      toast.error('Please fill all the fields');
      return;
    }
    setIsLoading(true);
    toast.promise((async () => {
      try {
        const response = await fetch(`/api/${featureTab}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(codeBlock),
        });
        console.log({ response })
        const data = await response.json();
        setResult(data.result);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    })(), {
      loading: 'Aksing to AI...',
      success: 'AI responded',
      error: error => `AI responded with error: 🤭 ${error.message}`
    })

  }

  const handleCodeBlockValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCodeBlock(e.target.value);
  }

  console.log({ result, codeBlock, featureTab, isLoading, endPoint: `/api/${featureTab}`, isButtonDisabled })

  return (
    <section className='min-h-[calc(100vh_-_70px)]  py-12 lg:py-32 flex flex-col items-center'>
      <div className='flex flex-col items-center w-full  max-w-[1440px] mx-auto px-4 py-6'>
        <h1 className='text-2xl lg:text-7xl font-medium text-center'>Your Ai developer friend</h1>
        <div className='flex items-center justify-start w-full flex-wrap gap-4 lg:gap-6 mt-6'>
          {
            ['codeExplainer', 'addComments', 'codeRefactor', 'generateCode'].map((feather, i) => (<div key={i} onClick={() => setFeatureTab(feather)} className={`px-5 py-4 border dark:border-[#444444] ${featureTab === feather ? "border-[#FA8000] dark:bg-gradient-to-r from-purple-700 to-transparent dark:border-0 shadow-[4px_4px_#000]" : " "}  hover:shadow-[4px_4px_#000] hover:scale-95 transition-all duration-200 ease-linear cursor-pointer font-medium tracking-wide active:brightness-200`}>
              {feather}
            </div>))
          }
        </div>

        <form className='mt-12 w-full h-full' onSubmit={onSubmit} >
          <textarea spellCheck={false} className='border dark:border-[#444444] py-6 px-4 bg-transparent w-full h-[280px] outline-none' placeholder='Write your code here ...' value={codeBlock} onChange={handleCodeBlockValueChange} />
          <button type='submit' disabled={isButtonDisabled} className='hover:border dark:border-[#444444] px-7 py-3.5 rounded-lg tracking-wider bg-[#8a38f5] text-white font-medium shadow-[4px_4px_#000] hover:border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-12'>
            askToChatGPT
          </button>
        </form>

        {
          result && <div className='mt-12 px-4 py-6 lg:py-8 outline-none flex flex-col gap-4 w-full border dark:border-[#444444]' >
            <h2 className='text-lg lg:text-2xl font-medium text-left'>Output:</h2>
            <span>Your Que: <code>{codeBlock}</code></span>
            <span>AI answer:</span>
            <code spellCheck={false} dangerouslySetInnerHTML={{ __html: result.trim().replaceAll('\n', '<br/>') }} contentEditable className='outline-none' />
          </div>
        }
        {
          isLoading && <div className='mt-12  outline-none w-full ' >
            <p className='text-lg my-2'>Asking to ai developer friend ...</p>
            <div className='flex flex-col gap-4 w-full  border shadow px-4 py-6 lg:py-8 dark:border-[#444444] animate-pulse'>
              <p className='bg-white dark:bg-[#444444] h-4 w-[20%]  min-w-[200px]'></p>
              <p className='bg-white dark:bg-[#444444] h-4 w-1/4 min-w-[200px]'></p>
              <p className='bg-white dark:bg-[#444444] h-3 w-1/3 min-w-[300px]'></p>
              <p className='bg-white dark:bg-[#444444] h-3 w-full'></p>
            </div>
          </div>
        }

      </div>
    </section>
  )
}

export default TryPage
