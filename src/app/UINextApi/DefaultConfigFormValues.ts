// src/app/UINextApi/defaultConfig.ts
import { IConfigFormValues } from "./ConfigFormValue.interfaces";

export const defaultConfig: IConfigFormValues = {
    publisher: {
        heading: "",
        logo: {
            id: "",
            type: "",
        },
    },
    favicon: {
        icoUrl: "",
        appleTouchIconPngUrl: "",
        size32PngUrl: "",
        size16PngUrl: "",
        manifestUrl: "",
        safariPinnedTabSvgUrl: "",
        safariPinnedTabSvgColor: "",
        themeColor: "",
    },
    minutesPerLesson: 0,
    useLessonDuration: "",
    useLessonDurationCourse: "",
    useLessonDurationActivity: "",
    contactPhoneNumber: "",
    loginModalLink: {
        heading: "",
        url: "",
    },
    licenseLink: {
        heading: "",
        url: "",
    },
};