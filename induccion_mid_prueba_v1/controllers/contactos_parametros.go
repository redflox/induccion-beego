package controllers

import (
	"github.com/astaxie/beego"
	"github.com/induccion-beego/induccion_mid_prueba_v1/helpers"
)

type ContactosParametrosController struct {
	beego.Controller
}

func (c *ContactosParametrosController) URLMapping() {

}

// GetAll ...
// @Title GetAll
// @Description get AgendaParametros
// @Success 200 {object} []models.AgendasParametros
// @Failure 400 bad request
// @Failure 500 Internal Server Error
// @router / [get]
func (c *ContactosParametrosController) GetAll() {
	defer helpers.ErrorController(c.Controller, "AgendaParametrosController")

	if v, err := helpers.ListarContactosParametros(); err == nil {
		c.Ctx.Output.SetStatus(200)
		c.Data["json"] = map[string]interface{}{"Success": true, "Status": "200", "Message": "Successful", "Data": v}
	} else {
		panic(err)
	}

	c.ServeJSON()
}
