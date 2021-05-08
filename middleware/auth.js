export default function({ redirect, store }) {
  if (!store.state.islogin) {
    return redirect('/login')
  }
}