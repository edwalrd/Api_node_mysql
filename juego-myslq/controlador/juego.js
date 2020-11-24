'use strict'

const sql = require('../confing/db');

const juego = {}

const controlador = {

    ver_todo: (req, res) => {

        sql.query("SELECT  * FROM  game", (err, juego) => {

            if (err || !juego) {

                return res.status(400).send({

                    mensaje: "no se ha encontrado juego"
                });

            } else {
                return res.status(200).send({

                    mensaje: juego
                });
            }



        });


    },

    ver_uno: (req, res) => {


        var juego_id = req.params.id;

        if (!juego_id || juego_id == null) {

            return res.status(400).send({

                status: "error",
                mensaje: "ingrese el id del usuario que desea ver"
            });

        } else {

            sql.query("Select * FROM game where id = ? ", juego_id, (err, juego) => {

                if (err || !juego) {

                    return res.status(400).send({

                        status: "error",
                        mensaje: "no se ha encontrado juego con este id"
                    });

                } else {

                    return res.status(200).send({

                        status: "bien",
                        juego
                    });

                }

            });
        }

    },

    guardar: (req, res) => {

        const params = req.body;

        juego.nombre = params.nombre,
            juego.precio = params.precio,
            juego.plataforma = params.plataforma


        sql.query(" INSERT INTO juego.game  SET ?", juego, (err, juego) => {

            if (err || !juego) {

                return res.status(200).send({

                    status: "error",
                    mensaje: "no se pudo insertar el juego"

                });
            } else {

                return res.status(200).send({

                    status: "bien",
                    juego

                });

            }


        })


    },

    eliminar: (req, res) => {

        var juego_id = req.params.id;

        if (!juego_id || juego_id == null) {

            return res.status(400).send({

                status: "error",
                mensaje: "ingrese el id del juego que quiere eliminar"
            })

        } else {

            sql.query('DELETE From game WHERE id =?', juego_id, (err, juego) => {


                if (err || juego == null) {

                    return res.status(404).send({

                        status: "error",
                        mensaje: "no se ha encontrado este juego"
                    });

                } else {

                    return res.status(200).send({

                        status: "bien",
                        juego

                    });

                }

            });

        }

    },

    modificar: (req, res) => {

        const juego_id = req.params.id;

        const params = req.body;

        juego.nombre = params.nombre;
        juego.precio = params.precio;
        juego.plataforma = params.nombre;


        if (!juego_id || juego_id == null) {

            return res.status(400).send({

                status: "error",
                mensaje: "ingrese el id del juego que quiere modificar"
            })

        } else {

            sql.query("UPDATE game SET ? Where id = ?", [juego , juego_id], (err, juego) => {

                if (err || !juego) {

                    return res.status(400).send({

                        status: "error",
                        mensaje: "no se ha encontrado este juego"
                    });

                } else {

                    return res.status(200).send({
                        status: "bien",
                        juego

                    });

                }

            });

        }
    }

}

module.exports = controlador;