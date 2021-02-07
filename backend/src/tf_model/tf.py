import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.imagenet_utils import decode_predictions

import PIL as pil_image

def load_model():
    model = tf.keras.applications.MobileNetV2(weights="imagenet")
    print("Model loaded")
    return model

model = load_model()

def predict(image: pil_image.Image):

    image = np.asarray(image.resize((224, 224)))[..., :3]
    image = np.expand_dims(image, 0)
    image = image / 127.5 - 1.0
    
    result = decode_predictions(model.predict(image), 4)[0]
    
    response = []
    
    for i, res in enumerate(result):
        resp = {}
        resp["class"] = res[1]
        resp["confidence"] = f"{res[2]*100:0.2f} %"
        
        response.append(resp)
        
    return response