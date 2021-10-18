import React from "react";
import { Card } from "./card";

export const CardContainer = () => {
	return (
		<div>
			<div className="row">
				<div className="col-3">
					<Card enlace="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/google-fotos.jpg" />
				</div>
				<div className="col-3">
					<Card enlace="https://i.pinimg.com/564x/15/81/4b/15814bcbe69d06b95a94d128fffe65d0.jpg" />
				</div>
				<div className="col-3">
					<Card enlace="https://mott.pe/noticias/wp-content/uploads/2018/03/10-trucos-para-saber-c%C3%B3mo-tomar-fotos-profesionales-con-el-celular-portada-1280x720.jpg" />
				</div>
				<div className="col-3">
					<Card enlace="https://www.lolup.es/wp-content/uploads/2019/05/fotodes.jpg" />
				</div>
			</div>
		</div>
	);
};
