"use strict";

$(function () {

    let state = 0;

    let profile_title_ES = "Perfil";
    let profile_title_EN = "Profile";
    let profile_body_ES = ["Estudiar informática es encontrar soluciones para ayudar a los demás. Me interesé por la programación eficiente. Tengo soluciones en las que empleo programación evolutiva en GitHub como Genetic_Algorithm y Decode_Text.",
                          "Algunos proyectos muy simples de Android en los que buscaba aprender in/out y concurrencia de hilos de ejecución. Busco también poder trabajar en desarrollo móvil.",
                          "Desarrollé mi TFG sobre reconocimiento de imágenes con AI usando TensorFlow de Google. El objetivo es realizar un recorrido turístico por la Ciudad Universitaria de Madrid en el cual los usuarios interactúen con los monumentos con AR."];
    let profile_body_EN = ["Studying computer science is finding solutions to help others. I was interested in efficient programming. I have solutions in which I use evolutionary programming in GitHub such as Genetic_Algorithm and Decode_Text.",
                           "Some very simple Android projects in which I wanted to learn in/out and concurrence of execution threads. I'm also looking forward to working in mobile development.",
                           "I develop my TFG on image recognition with AI using Google's TensorFlow. The goal is to make a tour of the University City of Madrid in which users interact with the monuments with AR."];

    let skills_title_ES = "Aptitudes";
    let skills_title_EN = "Skills";
    let skills_body_ES = ["Buen trato a cliente, tranquilo y muy paciente.",
                         "Me gusta trabajar en equipo.",
                         "Avanzar y obtener resultados en proyectos de interes me apasiona.",
                         "Entusiasta de las nuevas tecnologías."];
    let skills_body_EN = ["Good treatment to client, calm and very patient.",
                         "I like working in a team.",
                         "To advance and obtain results in projects of interest to me passionately.",
                         "Enthusiastic about new technologies."];

    let work_experience_title_ES = "Experiencia laboral";
    let work_experience_title_EN = "Work experience";

    let work_name_1_ES = "Desarrollador Software";
    let work_date_1_ES = "2016 - 2018";
    let work_name_1_EN = "Software Developer";
    let work_date_1_EN = "2016 - 2018";

    let work_name_2_ES = "Insights & Data";
    let work_date_2_ES = "2019 - Actualidad";
    let work_name_2_EN = "Insights & Data";
    let work_date_2_EN = "2019 - Current";

    let work_description_1_ES = ["Empresa de gestión documental con softwares como Documentum o Application Extender etre otros. Instalación, modificación y soporte de estos softwares a gusto del cliente.",
                                 "Ampliando en código Java añadiendo las funcionalidades y requisitos del cliente. Trato con cliente y soporte técnico backend y frontend."];
    let work_description_1_EN = ["Document management company with software like Documentum or Application Extender etre others. Installation, modification and support of these softwares to the taste of the client.",
                                 "Enhancing in Java code by adding the functionalities and requirements of the client. I deal with customer and technical support backend and frontend."];

    let work_description_2_ES = ["Corporación multinacional francesa de servicios de consultoría tecnológica. Trato a cliente, gestión de proyectos Big Data, trabajo en Spark y herramientas Hadoop. Machine Learning y Deep Learning. IBM Cloud, Azure y AWS."];
    let work_description_2_EN = ["Multinational French technology consulting services corporation. Customer service, Big Data project management, Spark work and Hadoop tools. Machine Learning and Deep Learning. IBM Cloud, Azure and AWS."];

    let studies_title_ES = "Estudios";
    let studies_title_EN = "Studies";

    let studies_description_1_ES = "Curso en desarrollo de videojuegos Unity."
    let studies_description_1_EN = "Course in video game development Unity."
    let studies_description_2_ES = "Grado en Ingeniería del Software."
    let studies_description_2_EN = "Degree in Software Engineering."

    let languages_title_ES = "Idiomas";
    let languages_title_EN = "Languages";

    let certifications_title_ES = "Certificados";
    let certifications_title_EN = "Certifications";

    let projects_title_ES = "Proyectos";
    let projects_title_EN = "Projects";

    $('#profile_title').text(profile_title_ES);
    $('#profile_body_0').text(profile_body_ES[0]);
    $('#profile_body_1').text(profile_body_ES[1]);
    $('#profile_body_2').text(profile_body_ES[2]);

    $('#skills_title').text(skills_title_ES);
    $('#skills_body_0').text(skills_body_ES[0]);
    $('#skills_body_1').text(skills_body_ES[1]);
    $('#skills_body_2').text(skills_body_ES[2]);
    $('#skills_body_3').text(skills_body_ES[3]);

    $('#work_experience_title').text(work_experience_title_ES);
    $('#work_name_1').text(work_name_1_ES);
    $('#work_date_1').text(work_date_1_ES);
    $('#work_description_1_0').text(work_description_1_ES[0]);
    $('#work_description_1_1').text(work_description_1_ES[1]);
    $('#work_name_2').text(work_name_2_ES);
    $('#work_date_2').text(work_date_2_ES);
    $('#work_description_2_0').text(work_description_2_ES[0]);

    $('#studies_title').text(studies_title_ES);
    $('#studies_description_1').text(studies_description_1_ES);
    $('#studies_description_2').text(studies_description_2_ES);

    $('#languages_title').text(languages_title_ES);

    $('#certifications_title').text(certifications_title_ES);

    $('#projects_title').text(projects_title_ES);

    function toSpanish() {
        $('#profile_title').text(profile_title_ES);
        $('#profile_body_0').text(profile_body_ES[0]);
        $('#profile_body_1').text(profile_body_ES[1]);
        $('#profile_body_2').text(profile_body_ES[2]);

        $('#skills_title').text(skills_title_ES);
        $('#skills_body_0').text(skills_body_ES[0]);
        $('#skills_body_1').text(skills_body_ES[1]);
        $('#skills_body_2').text(skills_body_ES[2]);
        $('#skills_body_3').text(skills_body_ES[3]);

        $('#work_experience_title').text(work_experience_title_ES);
        $('#work_name_1').text(work_name_1_ES);
        $('#work_date_1').text(work_date_1_ES);
        $('#work_description_1_0').text(work_description_1_ES[0]);
        $('#work_description_1_1').text(work_description_1_ES[1]);
        $('#work_name_2').text(work_name_2_ES);
        $('#work_date_2').text(work_date_2_ES);
        $('#work_description_2_0').text(work_description_2_ES[0]);

        $('#studies_title').text(studies_title_ES);
        $('#studies_description_1').text(studies_description_1_ES);
        $('#studies_description_2').text(studies_description_2_ES);

        $('#languages_title').text(languages_title_ES);

        $('#certifications_title').text(certifications_title_ES);

        $('#projects_title').text(projects_title_ES);
    }

    function toEnglish() {
        $('#profile_title').text(profile_title_EN);
        $('#profile_body_0').text(profile_body_EN[0]);
        $('#profile_body_1').text(profile_body_EN[1]);
        $('#profile_body_2').text(profile_body_EN[2]);

        $('#skills_title').text(skills_title_EN);
        $('#skills_body_0').text(skills_body_EN[0]);
        $('#skills_body_1').text(skills_body_EN[1]);
        $('#skills_body_2').text(skills_body_EN[2]);
        $('#skills_body_3').text(skills_body_EN[3]);

        $('#work_experience_title').text(work_experience_title_EN);
        $('#work_name_1').text(work_name_1_EN);
        $('#work_date_1').text(work_date_1_EN);
        $('#work_description_1_0').text(work_description_1_EN[0]);
        $('#work_description_1_1').text(work_description_1_EN[1]);
        $('#work_name_2').text(work_name_2_EN);
        $('#work_date_2').text(work_date_2_EN);
        $('#work_description_2_0').text(work_description_2_EN[0]);

        $('#studies_title').text(studies_title_EN);
        $('#studies_description_1').text(studies_description_1_EN);
        $('#studies_description_2').text(studies_description_2_EN);

        $('#languages_title').text(languages_title_EN);

        $('#certifications_title').text(certifications_title_EN);

        $('#projects_title').text(projects_title_EN);
    }

    $('#ES_EN').on({
        'click': function () {
            state = (state == 0) ? 1 : 0;
            if (state == 0) toSpanish();
            else toEnglish();
        }
    });
});