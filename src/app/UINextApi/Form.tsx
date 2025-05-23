"use client";
import _ from "lodash";
import { useEffect, useState } from "react";
import DropdownToForm from "./DropdownToForm";
import { IConfigFormValues } from "./ConfigFormValue.interfaces";
import { InputAsNumber, InputAsString } from "./InputToForm";
import { getRequest, putRequest } from "../utils/requests";
import SubmitFormModal from "./SubmitFormModal";
import {defaultConfig} from "./DefaultConfigFormValues";

interface IFormProps {
  appId: string;
  serverUrl: string;
}

const Form: React.FC<IFormProps> = ({ appId, serverUrl }) => {
  const [modal, setModal] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<IConfigFormValues>(defaultConfig);
  
  const toggleModal = () => {
    setModal(!modal);
  };

  const path = process.env.NEXT_PUBLIC_PATH;
  const endpoint = path + appId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRequest<IConfigFormValues>(serverUrl, endpoint, null, false, {'Preview':'true'});

        setFormData({
          ...data,
          useLessonDuration: data.useLessonDuration ? "true" : "false",
          useLessonDurationActivity: data.useLessonDurationActivity
            ? "true"
            : "false",
          useLessonDurationCourse: data.useLessonDurationCourse
            ? "true"
            : "false",
        });
        
        setDataLoaded(true);
        // eslint-disable-next-line 
      } catch (error: any) {
        setError(error.message);
        console.log("Error fetching data ", error);
      }
    };

    fetchData();
  }, [serverUrl, path, endpoint]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => _.set({ ...prevData }, name, value));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await putRequest(serverUrl, endpoint, formData);
      setModal(true);
      console.log(response);
      // eslint-disable-next-line 
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      {modal && <SubmitFormModal toggleModal={toggleModal} />}
      {error && <div className="bg-red-600 text-white p-2 m-2">{error}</div>}
      {!dataLoaded ? (
        <h1>Loading data...</h1>
      ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 justify-center gap-6">
              <div className="col-span-3 p-2 bg-blue-400 text-white text-xl font-bold">
                <div className="">Server: <b>{serverUrl}</b></div>
                <div>AppId: {appId}</div>
              </div>
              <div className="col-span-1 p-2">
                <h1 className="text-xl font-bold">Publisher</h1>
                <InputAsString
                    htmlFor="heading"
                    onChange={handleChange}
                    value={formData.publisher.heading}
                    name="publisher.heading"
                    title="Heading"
                />
                <br/>
                <InputAsString
                    htmlFor="brandColor"
                    onChange={handleChange}
                    value={formData.publisher.brandColor}
                    name="publisher.brandColor"
                    title="BrandColor"
                />
                <br/>
                <br/>
                <h2 className="text-lg font-bold">Logo</h2>
                <InputAsString
                    htmlFor="id"
                    onChange={handleChange}
                    value={formData.publisher.logo.id}
                    name="publisher.logo.id"
                    title="Id"
                />
                <br/>
                <InputAsString
                    htmlFor="type"
                    onChange={handleChange}
                    value={formData.publisher.logo.type}
                    name="publisher.logo.type"
                    title="Type"
                />
                <br/>
                <br/>
                <h1 className="text-xl font-bold">Login Modal Link</h1>
                <InputAsString
                    htmlFor="heading"
                    onChange={handleChange}
                    value={formData.loginModalLink?.heading ?? ''}
                    name="loginModalLink.heading"
                    title="Heading"
                />
                <br/>
                <InputAsString
                    htmlFor="url"
                    onChange={handleChange}
                    value={formData.loginModalLink?.url ?? ''}
                    name="loginModalLink.url"
                    title="Url"
                />
                <br/>
                <br/>
                <h1 className="text-xl font-bold">License Link</h1>
                <InputAsString
                    htmlFor="heading"
                    onChange={handleChange}
                    value={formData.licenseLink.heading}
                    name="licenseLink.heading"
                    title="Heading"
                />

                <br/>
                <InputAsString
                    htmlFor="url"
                    onChange={handleChange}
                    value={formData.licenseLink.url}
                    name="licenseLink.url"
                    title="Url"
                />
              </div>

              <div className="col-span-1 p-2">
                <h1 className="text-xl font-bold">FavIcon</h1>

                <InputAsString
                    htmlFor="icoUrl"
                    onChange={handleChange}
                    value={formData.favicon.icoUrl}
                    name="favicon.icoUrl"
                    title="Ico Url"
                />
                <br/>

                <InputAsString
                    htmlFor="appleTouchIconPngUrl"
                    onChange={handleChange}
                    value={formData.favicon.appleTouchIconPngUrl}
                    name="favicon.appleTouchIconPngUrl"
                    title="Apple Touch Icon Png Url"
                />
                <br/>
                <InputAsString
                    htmlFor="size32PngUrl"
                    onChange={handleChange}
                    value={formData.favicon.size32PngUrl}
                    name="favicon.size32PngUrl"
                    title="32 PNG Url"
                />

                <br/>
                <InputAsString
                    htmlFor="size16PngUrl"
                    onChange={handleChange}
                    value={formData.favicon.size16PngUrl}
                    name="favicon.size16PngUrl"
                    title="16 PNG Url"
                />

                <br/>
                <InputAsString
                    htmlFor="manifestUrl"
                    onChange={handleChange}
                    value={formData.favicon.manifestUrl}
                    name="favicon.manifestUrl"
                    title="Manifest Url"
                />
                <br/>
                <InputAsString
                    htmlFor="safariPinnedTabSvgUrl"
                    onChange={handleChange}
                    value={formData.favicon.safariPinnedTabSvgUrl}
                    name="favicon.safariPinnedTabSvgUrl"
                    title="Safari Pinned Tab Svg Url"
                />

                <br/>

                <InputAsString
                    htmlFor="safariPinnedTabSvgColor"
                    onChange={handleChange}
                    value={formData.favicon.safariPinnedTabSvgColor}
                    name="favicon.safariPinnedTabSvgColor"
                    title="Safari Pinned Tab Svg Color"
                />

                <br/>

                <InputAsString
                    htmlFor="themeColor"
                    onChange={handleChange}
                    value={formData.favicon.themeColor}
                    name="favicon.themeColor"
                    title="Theme Color"
                />
              </div>

              <div className="col-span-1 p-2">
                <h1 className="text-xl font-bold">Other</h1>

                <InputAsNumber
                    htmlFor="minutesPerLesson"
                    onChange={handleChange}
                    value={formData.minutesPerLesson}
                    name="minutesPerLesson"
                    title="Minutes Per Lesson"
                />

                <br/>

                <DropdownToForm
                    htmlFor="useLessonDuration"
                    name="useLessonDuration"
                    value={formData.useLessonDuration}
                    onChange={handleChange}
                    title="Use Lesson Duration"
                />
                <br/>
                <DropdownToForm
                    htmlFor="useLessonDurationCourse"
                    name="useLessonDurationCourse"
                    value={formData.useLessonDurationCourse}
                    onChange={handleChange}
                    title="Use Lesson Duration Course"
                />
                <br/>
                <DropdownToForm
                    htmlFor="useLessonDurationActivity"
                    name="useLessonDurationActivity"
                    value={formData.useLessonDurationActivity}
                    onChange={handleChange}
                    title="Use Lesson Duration Activity"
                />
                <br/>
                <InputAsString
                    htmlFor="contactPhoneNumber"
                    onChange={handleChange}
                    value={formData.contactPhoneNumber}
                    name="contactPhoneNumber"
                    title="Contact Phone Number"
                />
              </div>
            </div>

            <div className="font flex w-full justify-center ">
              <button className="rounded bg-black pl-2 pr-2 text-white p-1">
                Submit
              </button>
            </div>
          </form>
      )}

    </div>
  );
};

export default Form;
