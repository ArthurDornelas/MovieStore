import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dropzone from 'react-dropzone'
import  Button  from '@mui/material/Button';

export default function AddMovies() {
    return (
        <Card sx={{ minWidth: 400, minHeight: 300, display: 'flex',
             justifyContent: 'center', alignItems: 'center'  }}>
            <CardContent >
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div style={{ display: 'flex', flexDirection: 'column',
                            alignItems: 'center'  }} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag and drop files here</p>
                            <p>or</p>
                            <Button
                                variant="contained"
                                component="label"
                                >
                                Upload File
                            </Button>
                        </div>
                        </section>
                    )}
                </Dropzone>
            </CardContent>
        </Card>
    );
}