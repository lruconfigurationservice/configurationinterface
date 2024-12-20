'use client'
import Login from "@/components/Login";
import Form from "./UINextApi/Form";
import { InputAsString } from "./UINextApi/InputToForm";
import { useEffect, useState } from "react";
import _ from "lodash";

interface IFormProps {
  appId: string,
  serverUrl: string
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [appId] = useState<string | null>(getQueryParam('appId'));
  const [serverUrl] = useState<string | null>(getQueryParam('server'));
  const [formData, setFormData] = useState<IFormProps>({
    appId: '',
    serverUrl: '',
  });
  const [serverUrls] = useState<string[]>(getServerUrls());
  
  function getServerUrls() {
    // split value of process.env.SERVERS by comma, and make array 
    const servers = process.env.NEXT_PUBLIC_BFF_URLS.split(',');
    if (servers.length == 0) {
      return ["BFF_URLS not set"];
    }
    return servers;
  }

  useEffect(() => {
    if (appId != null) {
        setFormData((prevData) => _.set({ ...prevData }, 'appId', appId));
    }
    if (serverUrl != null) {
      setFormData((prevData) => _.set({ ...prevData }, 'serverUrl', serverUrl));
    }
  }, []);

  function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get(param);
  }

  const handleAppIdSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appendQueryParamsToUrl(formData);
  };


  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => _.set({ ...prevData }, name, value));
  };

  function appendQueryParamsToUrl(formData: IFormProps) {
    const currentUrl = window.location.href;
    // Get the domain from the URL
    const domain = currentUrl.split('?')[0];
    const newUrl = `${domain}?appId=${formData.appId}&server=${formData.serverUrl}`;
    window.location.href = newUrl;
  }

  return (
      <div className="bg-slate-200 h-full">
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        {isLoggedIn && (
            <>
              {!appId || !serverUrl ? (
                  <div className="flex justify-center items-center h-[100vh]">
                    <form onSubmit={handleAppIdSubmit}>
                      <label htmlFor="appId">App ID:</label>
                      <InputAsString htmlFor="appId" value={formData.appId} onChange={handleChange} name="appId" title="AppId"/>
                      <label htmlFor="serverUrl">Server URL</label>
                      <select name="serverUrl" onChange={handleChange} value={formData.serverUrl} className="w-full border border-black rounded-md p-1">
                        <option>Select server</option>
                        {serverUrls.map((url, index) => (
                            <option key={index} value={url}>{url}</option>
                        ))}
                      </select>
                      <button type="submit" className="rounded bg-black pl-2 pr-2 text-white self-center">Submit</button>
                    </form>
                  </div>
              ) : (
                  <Form appId={appId} serverUrl={serverUrl}/>
              )}
            </>
        )}
      </div>
  );
}
