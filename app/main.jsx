import * as React from "react";
import * as ReactDOM from "react-dom";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { IntlProvider, load, loadMessages, LocalizationProvider } from "@progress/kendo-react-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";
import numbers from "cldr-numbers-full/main/es/numbers.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
load(likelySubtags, currencyData, weekData, numbers, caGregorian, dateFields, timeZoneNames);
import esMessages from "./es.json";
loadMessages(esMessages, "es-ES");
const App = () => {
  const locales = [{
    language: "en-US",
    locale: "en"
  }, {
    language: "es-ES",
    locale: "es"
  }];
  const [locale, setLocale] = React.useState(locales[0]);
  const value = new Date();
  return <LocalizationProvider language={locale.language}>
      <IntlProvider locale={locale.locale}>
        <div className="example-wrapper row">
          <div className="col-xs-12 col-md-12 example-config">
            <h6>
              Locale:
              <DropDownList value={locale} data={locales} textField={"locale"} onChange={e => {
              setLocale(e.target.value);
            }} />
            </h6>
          </div>
          <div className="col-xs-12 col-md-6 example-col">
            <p>Default Show</p>
            <DatePicker defaultValue={value} defaultShow={true} />
            <p>Format and WeekColumn</p>
            <DatePicker defaultValue={value} format="dd/MMM/yyyy" weekNumber={true} />
            <p>Disabled</p>
            <DatePicker disabled={true} defaultValue={value} format="dd/MMMM/yyyy" />
          </div>
        </div>
      </IntlProvider>
    </LocalizationProvider>;
};
ReactDOM.render(<App />, document.querySelector("my-app"));