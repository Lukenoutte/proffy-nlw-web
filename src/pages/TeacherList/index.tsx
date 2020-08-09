import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader/index";
import TeacherItem from "../../components/TeacherItem/index";
import Input from "../../components/Input/index";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teacher">

          <Input name="subject" label="Matéria" />

          <Input name="week-day" label="Dia da Semana" />
          
          <Input name="time" type="time" label="Hora" />

        </form>
      </PageHeader>

      <main>
       <TeacherItem/>
       <TeacherItem/>
       <TeacherItem/>
      </main>

    </div>
  );
}
