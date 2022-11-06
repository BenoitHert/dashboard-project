import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

import { ScheduleComponent, ViewDirective, ViewsDirective,
      Inject, Agenda, Resize, DragAndDrop, Day} from '@syncfusion/ej2-react-schedule'


//AGENDA N'A PLUS LIEU D'ETRE SI IL Y A UNE FONCTION AGENDA DANS LE CALENDAR

const AgendaBook = () => {
  return (
    <div>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent>
        <Inject services={[Day, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default AgendaBook