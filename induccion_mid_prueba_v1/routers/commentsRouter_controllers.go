package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["github.com/induccion-beego/induccion_mid_prueba_v1/controllers:ContactosParametrosController"] = append(beego.GlobalControllerRouter["github.com/induccion-beego/induccion_mid_prueba_v1/controllers:ContactosParametrosController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
