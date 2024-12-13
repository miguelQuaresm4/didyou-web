import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import style from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Register() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    nome: Yup.string()
      .min(3, "Nome inválido")
      .max(255, "Limite de caracteres atingido")
      .required("Campo obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .max(255, "Limite de caracteres atingido")
      .required("Campo obrigatório"),
    senha: Yup.string()
      .min(6, "Deve conter no minimo 6 caracteres")
      .max(255, "Limite de caracteres atingido")
      .required("Campo obrigatório"),
    senhaConfirmada: Yup.string()
      .required("Campo obrigatório")
      .oneOf([Yup.ref("senha")], "As senhas devem ser iguais"),
  });

  const valoresIniciais = {
    nome: "",
    email: "",
    senha: "",
    senhaConfirmada: "",
  };                

  const handleSubmit = async (values: FormikValues) => {
    await axios
      .post("http://localhost:8080/user/register", {
        nome: values.nome,
        email: values.email,
        senha: values.senha,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/signin");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={valoresIniciais}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={style.form}>
            <h2>Crie sua conta</h2>
            <label>
              <span>Nome Completo</span>
              <Field
                type="text"
                name="nome"
                placeholder="Diga seu nome completo"
              />
              <ErrorMessage name="nome">
                {(msg) => (
                  <div className={style.errorContainer}>
                    <span className={style.errorMessage}>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </label>

            <label>
              <span>Email</span>
              <Field
                type="email"
                name="email"
                placeholder="Crie seu novo email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <div className={style.errorContainer}>
                    <span className={style.errorMessage}>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </label>

            <label>
              <span>Senha</span>
              <Field
                type="password"
                name="senha"
                placeholder="Crie uma senha"
              />
              <ErrorMessage name="senha">
                {(msg) => (
                  <div className={style.errorContainer}>
                    <span className={style.errorMessage}>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </label>

            <label>
              <span>Confirme sua senha</span>
              <Field
                type="password"
                name="senhaConfirmada"
                placeholder="Escreva novamente sua senha"
              />
              <ErrorMessage name="senhaConfirmada">
                {(msg) => (
                  <div className={style.errorContainer}>
                    <span className={style.errorMessage}>{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </label>

            <div>
              <button
                className={style.buttonPrimary}
                onClick={() => navigate("/")}
              >
                Voltar
              </button>
              <button className={style.buttonSecondary} type="submit">
                Criar conta
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
