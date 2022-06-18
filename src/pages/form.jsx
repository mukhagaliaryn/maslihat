import React from 'react';
import Layout from '../layouts';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from "react-hook-form";
import { BACKEND_URL } from '../types';

const Form = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm();

    const onSumbit = async (data) => {
        const formData = new FormData()
        formData.append('to_fio', data.deputat);
        formData.append('from_fio', data.fio);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        formData.append('iin', data.iin);
        formData.append('content', data.content);
        data.file[0] && formData.append('file', data.file[0]);

        try {
            await fetch(`${BACKEND_URL}/message/`, {
                method: "POST",
                body: formData
            })
            alert("Хабарлама жіберілді!")
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Layout title={t("common:form.h1")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:form.h1")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <form className="form" onSubmit={handleSubmit(onSumbit)}>
                            <div className="form-group">
                                <select {...register("deputat")}>
                                    <option value="Арын Мұқағали Қажымұлы">Арын Мұқағали Қажымұлы</option>
                                    <option value="Арын Ерғали Қажымұлы">Арын Ерғали Қажымұлы</option>
                                    <option value="Жалғасбек Тәліпбай Ержанұлы">Жалғасбек Тәліпбай Ержанұлы</option>
                                    <option value="Қадіралы Орынбасар Маратұлы">Қадіралы Орынбасар Маратұлы</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" {...register("fio")} placeholder='Аты-жөні...' required/>
                            </div>
                            <div className="form-group">
                                <input type="phone" {...register("phone")} placeholder='Телефон нөмері...' required/>
                            </div>
                            <div className="form-group">
                                <input type="number" {...register("iin")} placeholder='ЖСН' required/>
                            </div>
                            <div className="form-group">
                                <input type="email" {...register("email")} placeholder='example@gmail.com' required/>
                            </div>
                            <div className="form-group">
                                <textarea name="" {...register("content")} cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="file" {...register("file")}/>
                            </div>
                            <div className="form-group">
                                <button>Жіберу</button>
                            </div>
                        </form>
                    </div> 

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Form;