export interface IConfigFormValues {
  publisher: {
    heading: string;
    logo: {
      id: string;
      type: string;
    };
    brandColor: string;
  };

  favicon: {
    icoUrl: string;
    appleTouchIconPngUrl: string;
    size32PngUrl: string;
    size16PngUrl: string;
    manifestUrl: string;
    safariPinnedTabSvgUrl: string;
    safariPinnedTabSvgColor: string;
    themeColor: string;
  };
  minutesPerLesson: number;
  useLessonDuration: string;
  useLessonDurationCourse: string;
  useLessonDurationActivity: string;
  contactPhoneNumber: string;
  loginModalLink: { heading: string; url: string };
  licenseLink: { heading: string; url: string };
}
