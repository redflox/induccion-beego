package models

type Contacto struct {
	Id                int
	NombreCompleto    string
	NumeroDocumento   string
	Direccion         string
	Activo            bool
	FechaCreacion     string
	FechaModificacion string
}
