import { Navigate, Route, Routes } from "react-router-dom";

import { Programacao } from "./pages/guaianases/Programacao";
import { SobreNos } from "./pages/guaianases/SobreNos";
import { Home } from "./pages/guaianases/Home";
import { Devocional } from "./pages/guaianases/Devocional";
import { Ministerios } from "./pages/guaianases/Ministerios";

import { TelaInicial } from "./pages/TelaInicial";

import { HomeF } from "./pages/ferraz/Home";
import { CultosF } from "./pages/ferraz/Cultos";
import { MinisteriosF } from "./pages/ferraz/Ministerios";
import { ProgramacaoF } from "./pages/ferraz/Programacao";
import { SobreNosF } from "./pages/ferraz/SobreNos";

export function Router(){
    return(
    <Routes>
        <Route path="/" element={<Navigate to="/inicial" />} />
        <Route index path="/inicial" element={<TelaInicial />} />

        <Route index path="/guaianases/home" element={<Home />} />
        <Route index path="/guaianases/programacao" element={<Programacao />} />
        <Route index path="/guaianases/devocional" element={<Devocional />} />
        <Route index path="/guaianases/sobre" element={<SobreNos />} />
        <Route index path="/guaianases/ministerios" element={<Ministerios />} />

        <Route index path="/ferraz/home" element={<HomeF />} />
        <Route index path="/ferraz/programacao" element={<ProgramacaoF />} />
        <Route index path="/ferraz/cultos" element={<CultosF />} />
        <Route index path="/ferraz/sobre" element={<SobreNosF />} />
        <Route index path="/ferraz/ministerios" element={<MinisteriosF />} />
    </Routes>
    )
}