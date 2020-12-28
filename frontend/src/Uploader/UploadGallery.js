import React from 'react';
import RUG, { DragArea, DropArea, Card, List } from 'react-upload-gallery';
import axios from 'axios'; 

export default function UploadGallery(event) {

    customRequest ({ uid, file, send, action, headers, onProgress, onSuccess, onError }) {
        const form = new FormData();
        form.append('file', file)
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()       

        axios.post(
            action,
            form,
            {
                headers: {
                    'x-access-token' : 'xxxx'
                },
                onUploadProgress: ({ total, loaded }) => {
                    onProgress(uid, Math.round(loaded / total * 100));
                },
                cancelToken: source.token
            }
        ).then(({ data: response }) => {
            onSuccess(uid, response);
        })
        .catch(error => {
            onError(uid, {
                action,
                status: error.request,
                response: error.response
            })
        })

      //having trouble with class extends Components vs. function components: where do these returns go?
         
        return {
            abort() {
                source.cancel()
            }
        }
    }

  return(
    <RUG
      action="/api/upload"
      source={(response) => response.source}
      rules={{
        limit: 10,
        size: 20,
        width: { min: 1280, max: 1920 },
        height: { min: 720, max: 1080 },
        accept={['jpg', 'jpeg', 'png']}, 
        customRequest={customRequest}
    />
  )
}
