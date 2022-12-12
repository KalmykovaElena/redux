import React, {Component} from 'react';
import ErrorIndicator from "../error-indikator";

class ErrorBoundary extends Component {
    state = {
        hasError:false
}
static getDerivedStateFromError(error){
return{
    hasError:true
}
}
componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error)
    console.log('componentDidCatch',  errorInfo)
}

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;