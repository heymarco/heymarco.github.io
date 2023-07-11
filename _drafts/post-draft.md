---
layout: single
title:  "Asynchronous execution of python function with ordered result"
#header:
#  teaser: "unsplash-gallery-image-2-th.jpg"
categories: 
  - python
tags:
  - multiprocessing
---

Evaluating machine learning algorithms typically requires
1. comparing ones own algorithm to the state of the art. 
2. repeating an experiment multiple times to obtain statistically significant results.

To setup such an experiment, one could write a function `evaluate_algorithm(alg, train_data, test_data) -> float` that takes an algorithm instance `alg`, trains on `train_data`, evaluates on `test_data` and then returns the achieved accuracy. 

One could then loop over all algorithms, data sets, and experiment repetitions and sequentially call `evaluate_algorithm`:
```python
algs = {"alg1": alg1, "alg2": alg2, "alg3": alg3}
datasets = {"ds1": (train1, test1), 
            "ds2": (train2, test2), 
            "ds3": (train3, test3)}


result = []
for alg_name, alg in algs.items():
    for ds_name, (train, test) in datasets.items():
        for rep in repetitions:
            accuracy = evaluate_algorithm(alg, train, test)
            result.append([alg_name, rep, ds_name, accuracy])
```
Note that `result` can be easily converted to a pandas DataFrame. 
Needless to say, this approach becomes very time-consuming very fast! 
So, let's try to get rid of the nested loops by using multiprocessing.

```python
from multiprocessing import Pool
from time import sleep


def _wait(i):
    sleep(i)
    return i


def run_async(function, args_list, njobs, sleep_time_s = 0.1):
    pool = Pool(njobs)
    results = {i: pool.apply_async(function, args=args)
               for i, args in enumerate(args_list)}
    while not all(future.ready() for future in results.values()):
        sleep(sleep_time_s)
    results = [results[i].get() for i in range(len(results))]
    pool.close()
    return results
  
  
if __name__ == '__main__':
    njobs = 3
    delay = [[i] for i in range(3)]
    result = run_async(_wait, delay, njobs)
    print(result)
```