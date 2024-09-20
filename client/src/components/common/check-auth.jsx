import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Verifica se o usuário não está autenticado e tenta acessar qualquer página que não seja login ou registro
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Se o usuário está autenticado e tenta acessar login ou registro, redireciona para o dashboard correspondente
  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Se o usuário não é admin e tenta acessar rotas administrativas
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />; // Página de não autorizado ou outra rota
  }

  // Se o usuário não é um cliente e tenta acessar rotas de shopping
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />; // Redireciona para o dashboard admin
  }

  // Caso todas as verificações passem, renderiza os filhos (children)
  return children;
}

export default CheckAuth;
