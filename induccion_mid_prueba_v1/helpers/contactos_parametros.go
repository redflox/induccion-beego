package helpers

import (
	"github.com/beego/beego/logs"
	"github.com/induccion-beego/induccion_mid_prueba_v1/models"
)

func ListarContactosParametros() (contactosParametros models.ContactosParametros, outputError map[string]interface{}) {
	defer func() {
		if err := recover(); err != nil {
			outputError = map[string]interface{}{"function": "ListarContactosParametros", "err": err, "Status": "500"}
			panic(outputError)
		}
	}()
	// peticiones GET
	url := "parametro?query=TipoParametroId__CodigoAbreviacion:C&limit=0"
	var parametros []models.Parametro
	if err := GetRequestNew("UrlCrudParametros", url, &parametros); err != nil {
		logs.Error(err)
		panic(err.Error())
	}
	var contactos []models.Contacto
	if err := GetRequestNew("UrlCrudAgenda", "contacto?limit=0", &contactos); err != nil {
		logs.Error(err)
		panic(err.Error())
	}
	contactosParametros.Contacto = contactos
	contactosParametros.Parametro = parametros
	return contactosParametros, outputError
}
