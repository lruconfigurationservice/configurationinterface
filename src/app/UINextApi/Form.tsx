'use client'
import _ from 'lodash';
import { useEffect, useState } from 'react';
import DropdownToForm from './DropdownToForm';
import { IFormProps } from './FormProps.interfaces';
import { InputAsNumber, InputAsString } from './InputToForm';
import { getConfigVariable } from '../config';
import { getRequest, putRequest } from '../utils/requests';

const Form = () => {
  const [formData, setFormData] = useState<IFormProps>({
    publisher: {
      heading: '',
      logo: {
        id: '',
        type: '',
      },
    },

    favicon: {
      icoUrl: '',
      appleTouchIconPngUrl: '',
      size32PngUrl: '',
      size16PngUrl: '',
      manifestUrl: '',
      safariPinnedTabSvgUrl: '',
      safariPinnedTabSvgColor: '',
      themeColor: '',
    },
    minutesPerLesson: 0,
    useLessonDuration: '',
    useLessonDurationCourse: '',
    useLessonDurationActivity: '',
    contactPhoneNumber: '',
    loginModalLink: {
      heading: '',
      url: '',
    },
    licenseLink: {
      heading: '',
      url: '',
    },
  });


  // const path = process.env.PATH
  // const params = process.env.PARAMS

  useEffect(() => {   
    const fetchData = async () => {
      try {
        const data = await getRequest<IFormProps>(
          process.env.PUBLIC_API_ROOT_WITHOUT_VERSION,
          ''
        );
        
        setFormData({
          ...data,
          useLessonDuration: data.useLessonDuration ? 'true' : 'false',
          useLessonDurationActivity: data.useLessonDurationActivity ? 'true' : 'false',
          useLessonDurationCourse: data.useLessonDurationCourse ? 'true' : 'false',
        });
      } catch (error) {
        console.log('Error fetching data ', error);
      }
    };

    fetchData();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => _.set({ ...prevData }, name, value));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await putRequest(
        getConfigVariable('API_ROOT_WITHOUT_VERSION'),
        '',
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 justify-center gap-6">
        <div className="col-span-1 p-2">
          <h1 className="text-xl font-bold">Publisher</h1>
          <InputAsString
            htmlFor="heading"
            onChange={handleChange}
            value={formData.publisher.heading}
            name="publisher.heading"
            title="Heading"
          />
          <h2 className="text-lg font-bold">Logo</h2>
          <InputAsString
            htmlFor="id"
            onChange={handleChange}
            value={formData.publisher.logo.id}
            name="publisher.logo.id"
            title="Id"
          />
          <br />
          <InputAsString
            htmlFor="type"
            onChange={handleChange}
            value={formData.publisher.logo.type}
            name="publisher.logo.type"
            title="Type"
          />

          <br />
          <br />
          <br />

          <h1 className="text-xl font-bold">Login Modal Link</h1>
          <InputAsString
            htmlFor="heading"
            onChange={handleChange}
            value={formData.loginModalLink.heading}
            name="loginModalLink.heading"
            title="Heading"
          />

          <br />
          <InputAsString
            htmlFor="url"
            onChange={handleChange}
            value={formData.loginModalLink.url}
            name="loginModalLink.url"
            title="Url"
          />

          <br />
          <br />
          <br />
          <h1 className="text-xl font-bold">License Link</h1>
          <InputAsString
            htmlFor="heading"
            onChange={handleChange}
            value={formData.licenseLink.heading}
            name="licenseLink.heading"
            title="Heading"
          />

          <br />
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
            name="favIcon.icoUrl"
            title="Ico Url"
          />
          <br />

          <InputAsString
            htmlFor="appleTouchIconPngUrl"
            onChange={handleChange}
            value={formData.favicon.appleTouchIconPngUrl}
            name="appleTouchIconPngUrl"
            title="Apple Touch Icon Png Url"
          />
          <br />
          <InputAsString
            htmlFor="size32PngUrl"
            onChange={handleChange}
            value={formData.favicon.size32PngUrl}
            name="favicon.size32PngUrl"
            title="32 PNG Url"
          />

          <br />
          <InputAsString
            htmlFor="size16PngUrl"
            onChange={handleChange}
            value={formData.favicon.size16PngUrl}
            name="favicon.size16PngUrl"
            title="16 PNG Url"
          />

          <br />
          <InputAsString
            htmlFor="manifestUrl"
            onChange={handleChange}
            value={formData.favicon.manifestUrl}
            name="favicon.manifestUrl"
            title="Manifest Url"
          />
          <br />
          <InputAsString
            htmlFor="safariPinnedTabSvgUrl"
            onChange={handleChange}
            value={formData.favicon.safariPinnedTabSvgUrl}
            name="favicon.safariPinnedTabSvgUrl"
            title="Safari Pinned Tab Svg Url"
          />

          <br />

          <InputAsString
            htmlFor="safariPinnedTabSvgColor"
            onChange={handleChange}
            value={formData.favicon.safariPinnedTabSvgColor}
            name="favicon.safariPinnedTabSvgColor"
            title="Safari Pinned Tab Svg Color"
          />

          <br />

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

          <br />

          <DropdownToForm
            htmlFor="useLessonDuration"
            name="useLessonDuration"
            value={formData.useLessonDuration}
            onChange={handleChange}
            title="Use Lesson Duration"
          />
          <br />
          <DropdownToForm
            htmlFor="useLessonDurationCourse"
            name="useLessonDurationCourse"
            value={formData.useLessonDurationCourse}
            onChange={handleChange}
            title="Use Lesson Duration Course"
          />
          <br />
          <DropdownToForm
            htmlFor="useLessonDurationActivity"
            name="useLessonDurationActivity"
            value={formData.useLessonDurationActivity}
            onChange={handleChange}
            title="Use Lesson Duration Activity"
          />
          <br />
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
        <button className="rounded bg-black pl-2 pr-2 text-white ">Submit</button>
      </div>
    </form>
  );
};

export default Form;
