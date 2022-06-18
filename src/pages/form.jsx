import React from 'react';
import Layout from '../layouts';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from "react-hook-form";

const Form = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm();

    const onSumbit = (data) => {
        console.log(data);
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
                                    <option value="maryn">Арын Мұқағали Қажымұлы</option>
                                    <option value="earyn">Арын Ерғали Қажымұлы</option>
                                    <option value="talypbay">Жалғасбек Тәліпбай Ержанұлы</option>
                                    <option value="qadyraly">Қадіралы Орынбасар Маратұлы</option>
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
                                <input type="file" {...register("file")} required/>
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